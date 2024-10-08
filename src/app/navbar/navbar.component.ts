import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentSection!: string
  isNavbarContentOpen: any

  navigateToCart(cart: string) {
    throw new Error('Method not implemented.');
  }
  openNavbarContent(section: any) {
    console.log(section)
    this.isNavbarContentOpen = true;
    this.currentSection = section;
    console.log('currentSection section ', this.currentSection);
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('open-button');

    let clickedInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickedInsideButton = true;
      }
    })

    // if (modalContainer && !clickedInsideButton && this.isNavbarContentOpen) {
    //   this.closeNavbarContent();
    // }

    if (modalContainer && !clickedInsideButton && this.isNavbarContentOpen) {
      console.log(
        'container ---------------------- ',
        this.isNavbarContentOpen
      );
      this.closeNavbarContent();
    }
  }

}
