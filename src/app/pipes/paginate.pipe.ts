import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[],page_size: number | any,page_number:number): any[] {
    if (!array.length) return []

    if (page_size === 'all'){
      return array
    }
    //por defecto empieza en 5 los issues a mostrar
    page_size = page_size || 5
    //por defecto empieza en primera pagina, los 5 primeros registros
    page_number = page_number || 1
    --page_number

    return array.slice(page_number * page_size,(page_number+1) * page_size);
  }

}
