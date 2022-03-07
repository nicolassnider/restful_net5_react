using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Errors
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodeErrorException : CodeErrorResponse
    {
        public CodeErrorException(int statusCode, string errorMessage=null, string errorDetails=null) :base(statusCode, errorMessage)
        {
            ErrorDetails = errorDetails;
        }
        public string ErrorDetails { get; set; }
    }
}
