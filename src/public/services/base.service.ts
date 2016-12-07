import { Injectable }    from '@angular/core';

@Injectable()
export class BaseService {
  constructor(private model_name: string | null) {
  }
}