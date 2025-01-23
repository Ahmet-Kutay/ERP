using ERPServer.Application.Features.Customers.CreateCustomer;
using ERPServer.Application.Features.Customers.DeleteCustomerById;
using ERPServer.Application.Features.Customers.GetAllCustomer;
using ERPServer.Application.Features.Customers.UpdateCustomer;
using ERPServer.WebAPI.Abstractions;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ERPServer.WebAPI.Controllers;
    public sealed class CustomersController : ApiController
    {
        public CustomersController(IMediator mediator) : base(mediator) 
        { 
        }
        [HttpPost]
        public async Task<ActionResult> GetAll(GetAllCustomerQuery request, CancellationToken cancellationToken) 
        { 
            var response = await _mediator.Send(request, cancellationToken);
            return StatusCode(response.StatusCode, response);
        }
    [HttpPost]
    public async Task<ActionResult> Create(CreateCustomerCommand request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
    [HttpPost]
    public async Task<ActionResult> DeleteById(DeleteCustomerByIdCommand request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
    [HttpPost]
    public async Task<ActionResult> Update(UpdateCustomerCommand request, CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(request, cancellationToken);
        return StatusCode(response.StatusCode, response);
    }
}
