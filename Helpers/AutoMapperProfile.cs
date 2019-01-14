using AutoMapper;
using TheFlash.Dtos;
using TheFlash.Entities;

namespace TheFlash.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}