export class MainModel
{
    public name:string;
    public address:string;
    public email:string;
    public phone:number;
    constructor(name:string, address:string, email:string,phone:number)
    {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    }
}