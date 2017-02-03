using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Workshop.Infrastructure;
using Core.Workshop.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Core.Workshop
{
    public class Startup
    {
        public  IConfigurationRoot Configuration { get; private set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder().SetBasePath(env.ContentRootPath)
                         .AddUserSecrets();

            Configuration = builder.Build();
        }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<MeetupApiOptions>(Configuration.GetSection("MeetupApiOptions"));
            
            services.AddMvc();
            services.AddTransient<IMeetupClient>(s =>
            {
                var configuredApiKey = s.GetService<IOptions<MeetupApiOptions>>();
                return new MeetupClient(configuredApiKey.Value.ApiKey);
            });
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();            

            app.UseMvc(routes =>
            {
                routes.MapRoute("default","{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
