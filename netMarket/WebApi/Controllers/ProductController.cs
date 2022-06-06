using AutoMapper;
using Core.Entities;
using Core.Especifications;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dtos;
using WebApi.Errors;

namespace WebApi.Controllers
{
    public class ProductController : BaseApiController { 
        private readonly IGenericRepository<Product> _productRepository;
        private readonly IMapper _mapper;

        public ProductController(IGenericRepository<Product> productRepository,IMapper mapper)
        {
            _mapper=mapper;
            _productRepository = productRepository;
        }
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductDto>>> GetProducts([FromQuery]ProductSpecificationParam productParams)
        {
            var spec = new ProductWithCategoryAndBrandSpecification(productParams);
            var products = await _productRepository.GetAllWithSpec(spec);
            var specCount = new ProductForCountingSpecification(productParams);
            var totalProducts = await _productRepository.CountAsync(specCount);
            var rounded =Math.Ceiling(Convert.ToDecimal( totalProducts / productParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);
            var data = _mapper.Map < IReadOnlyList<Product>, IReadOnlyList < ProductDto >> (products);
            return Ok(new Pagination<ProductDto> { 
                Count = totalProducts, 
                Data = data,
                PageCount=totalPages,
                PageIndex=productParams.PageIndex,
                PageSize=productParams.PageSize
            });
            //return Ok(_mapper.Map<IReadOnlyList<Product>,IReadOnlyList<ProductDto>>(products));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProduct(int id)
        {
            //devuelve un solo resultado
            //spec= logica de la condicion de consulta y relación entre entidades. (producto y marca/categoría)
            var spec = new ProductWithCategoryAndBrandSpecification(id);
            var product = await _productRepository.GetByIdWithSpec(spec);
            if (product == null)
            {
                //return NotFound(new CodeErrorResponse(404));
                return NotFound(new CodeErrorResponse(404,"Product does not exist"));
            }
            return _mapper.Map<Product, ProductDto>(product);
        }
        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            var result = await _productRepository.Add(product);
            if (result == 0)
            {
                throw new Exception("Could not insert product");
            }
            return Ok(product);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Put(int id, Product product)
        {
            product.Id = id;
            var result = await _productRepository.Update(product);
            if (result == 0)
            {
                throw new Exception("could not update product");
            }
            return Ok(product);
        }

    }
}
