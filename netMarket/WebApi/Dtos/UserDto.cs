namespace WebApi.Dtos
{
    public class UserDto
    {
        public string Id { get;set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Image { get; set; }
        public bool Admin { get; set; }
    }
}
