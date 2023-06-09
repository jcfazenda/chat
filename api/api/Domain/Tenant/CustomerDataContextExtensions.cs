﻿using System;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection; 

namespace api.Domain.Tenant
{
    public static class CustomerDataContextExtensions
    {
        public static void AddCustomerDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped(provider =>
            {
                var httpContext = provider.GetService<IHttpContextAccessor>();

                // In this sample we are using a customer identifier as the firs segment in the url request 
                var clientSlug = httpContext.HttpContext.Request.Path.Value.Split("/", StringSplitOptions.RemoveEmptyEntries)[0];

                // If you need to perform any validation like if the customer exists
                // or if it has a valid subscription you can request a master context
                // and perform validations 

                var connString  = configuration.GetClientConnectionString(clientSlug);
                var opts        = new DbContextOptionsBuilder<GRCContext>();
                    opts.UseMySql(connString, s => s.EnableRetryOnFailure());
                    opts.EnableSensitiveDataLogging();  

                return new GRCContext(opts.Options);
            });
        }
    }

}
