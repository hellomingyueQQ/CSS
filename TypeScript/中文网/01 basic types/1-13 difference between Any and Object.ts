{
    let notSure: any = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

    let prettySure: Object = 4; // Object is from javascript
    prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
}
