using AutoMapper;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Dtos
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(p=>p.CategoryName,x=>x.MapFrom(c=>c.Category.Name))
                .ForMember(p=>p.BrandName,x=>x.MapFrom(a=>a.Brand.Name));
            CreateMap<Address, AddressDto>();
        }
    }
}
