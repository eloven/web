import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(style: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
