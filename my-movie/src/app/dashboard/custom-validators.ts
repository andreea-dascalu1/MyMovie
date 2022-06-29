import { FormControl } from "@angular/forms";

export class CustomValidators{
    public static humanName(control:FormControl){
        const regularExpression=new RegExp("^(\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*)$");
        return regularExpression.test(control.value)?null:{"not-human-name": true};
    }

    public static rating(control:FormControl){
        const regularExpression=new RegExp("^([0-9]([.][0-9])?|10)$");
        return regularExpression.test(control.value)?null:{"invalid-rating": true};
    }
  
    public static year(control:FormControl){
        const regularExpression=new RegExp("^(19[0-9][0-9]|20[01][0-9]|2022)$");
        return regularExpression.test(control.value)?null:{"invalid-year": true};
    }
}