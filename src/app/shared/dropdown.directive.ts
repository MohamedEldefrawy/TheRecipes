import { Directive, HostListener, ElementRef, Renderer2, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {


    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
    }

    @HostListener('click') openDropdown(eventData: Event) {

        this.elementRef.nativeElement.children[1].classList.toggle('show');

    }
}