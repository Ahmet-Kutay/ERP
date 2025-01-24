using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using MediatR;
using Microsoft.EntityFrameworkCore;
using TS.Result;

namespace ERPServer.Application.Features.Products.GetAllProduct;

internal sealed class GetAllProductQueryHandler : IRequestHandler<GetAllProductQuery, Result<List<Product>>>
{
    private readonly IProductRepository _productRepository;

    public GetAllProductQueryHandler(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<Result<List<Product>>> Handle(GetAllProductQuery request, CancellationToken cancellationToken)
    {
        List<Product> products = await _productRepository.GetAll()
            .OrderBy(p => p.Name)
            .ToListAsync(cancellationToken);

        return products;
    }
}
