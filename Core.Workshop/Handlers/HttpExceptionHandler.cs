using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Workshop.Handlers
{
    public class HttpExceptionHandler
    {
        private readonly RequestDelegate next;

        public HttpExceptionHandler(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception exception)
            {
                HandleException(context, exception);                
            }
        }

        private Task HandleException(HttpContext context, Exception exception)
        {
            Debug.WriteLine($"{exception.Message} {exception.InnerException?.Message ?? string.Empty}");
            return Task.CompletedTask;
        }
    }
}
