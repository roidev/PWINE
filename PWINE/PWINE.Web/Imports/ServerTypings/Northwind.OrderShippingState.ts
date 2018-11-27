namespace PWINE.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'PWINE.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

