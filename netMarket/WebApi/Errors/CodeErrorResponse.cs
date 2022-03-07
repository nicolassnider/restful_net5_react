namespace WebApi.Errors
{
    public class CodeErrorResponse
    {
        public CodeErrorResponse(int statusCode, string errorMessage =null)
        {
            StatusCode = statusCode;
            ErrorMessage = errorMessage ?? GetDefaultMessageStatusCode(statusCode);
        }
        private string GetDefaultMessageStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Invalid request",
                401 => "Unauthorized",
                404 => "Resource not found",
                500 => "Server error", _ => null,
            };
        }
        public int StatusCode { get; set; }
        public string ErrorMessage { get; set; }
    }
}
