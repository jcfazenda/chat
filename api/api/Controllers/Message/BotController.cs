
using api.Domain.Models.Usuario;
using api.Domain.Repository.Interface.Message;
using api.Domain.Repository.Interface.Usuario;
using api.Domain.Views.Input.Message;
using api.Domain.Views.Input.Usuario;
using api.Domain.Views.Output.Message;
using api.Domain.Views.Output.Usuario;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace api.Controllers.Message
{
    [Produces("application/json")]
    [Route("{tenant_database}/api/[controller]")]
    public class BotController : Controller
    {
        private readonly IBotRepository _Bot;

        public BotController(IBotRepository Bot)
        {
            _Bot = Bot;
        }

        [HttpPost("GetAny")]
        [EnableCors("CorsPolicy")]
        public IActionResult GetAny([FromBody] BotInput input)
        {
            var data = _Bot.GetAny((bool)input.Fl_Ativo).ProjectTo<BotOutput>();

            return Response(true, "Sucesso", "Operação realizada com sucesso", data, "success");
        }

        [HttpPost("Save")]
        [EnableCors("CorsPolicy")]
        public IActionResult Save([FromBody] BotInput input)
        {
            if (input == null) { return Response(false, "Erro", "algo inesperado aconteceu.", null, "error"); }

            if (input.Id_Bot == 0) { _Bot.Create(input); }
            if (input.Id_Bot  > 0) { _Bot.Update(input); }

            return Response(true, "Sucesso", "Registro criado com sucesso", null, "success");
        }

        protected new ActionResult Response(bool success, string Title, string Message, object data, string type)
        {
            return Ok(new
            {
                success,
                Title,
                Message,
                data,
                type
            });
        }

    }
}
