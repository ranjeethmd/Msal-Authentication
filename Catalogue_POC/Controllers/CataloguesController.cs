using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalogue_POC.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CataloguesController : ControllerBase
    {

        private readonly ILogger<CataloguesController> _logger;

        public CataloguesController(ILogger<CataloguesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Catalogue> Get()
        {
            var catalogues = new List<Catalogue>{new Catalogue {
                IpType="NVM",
                Intel16IPList= "eNVM MRAM SIP",
                Supplier ="Dxcorr",
                IpDescription = "eNVM MRAM Controller SIP",
                FrontendView = "eNVM MRAM Controller SIP",
                BackendView = "1/31/2022",
                PdkVersionForBackendview = "N/A (HIP from intel)",
            }};

            return catalogues;
        }
    }
}
