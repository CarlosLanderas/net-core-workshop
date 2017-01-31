
using Microsoft.AspNetCore.Mvc;

namespace Core.Workshop.Controllers
{
    public class HomeController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
