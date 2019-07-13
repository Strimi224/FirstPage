import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Category } from './category';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { EditCategoryOverlayRef } from './edit-category-overlay-ref';
import { EDIT_CATEGORY_DIALOG_DATA } from './edit-category-overlay.tokens';

interface OverlayDialogConfig {
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: Category;
}

const DEFAULT_CONFIG: OverlayDialogConfig = {
  hasBackdrop: true,
};

@Injectable({
  providedIn: 'root'
})
export class EditCategoryStateService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
    ) {  }

  private getOverlayConfig(config: OverlayDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private createOverlay(config: OverlayDialogConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private createInjector(config: OverlayDialogConfig, dialogRef: EditCategoryOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(EditCategoryOverlayRef, dialogRef);
    injectionTokens.set(EDIT_CATEGORY_DIALOG_DATA, config.data);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: OverlayDialogConfig, dialogRef: EditCategoryOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(CategoryEditorComponent, null, injector);
    const containerRef: ComponentRef<CategoryEditorComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  open(config: OverlayDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new EditCategoryOverlayRef(overlayRef);

    /*const overlayComponent = */
    this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    // Subscribe to a stream that emits when the backdrop was clicked
    // Basically it closes the windows when you do not click on the
    // Overlay direcally
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    // Return remote control
    return dialogRef;
  }

}
