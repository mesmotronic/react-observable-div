import { createRef, PropsWithChildren, PureComponent } from "react";

export interface ResizeDivProps extends PropsWithChildren {
  onMount?: (domElement: HTMLDivElement) => void;
  onUnMount?: () => void;
  onResize?: (newSize: DOMRectReadOnly) => void;
  className?: string;
}

/**
 * Provides a div element that can be observed for mount, unmount and resize events
 * We use a class component because it's more reliable than useEffect for this use case
 */
export class ObservableDiv extends PureComponent<ResizeDivProps> {

  protected domElementRef = createRef<HTMLDivElement>();
  protected resizeObserver: ResizeObserver | null = null;

  public override componentDidMount() {

    if (this.domElementRef.current) {
      this.props.onMount?.(this.domElementRef.current);

      this.resizeObserver = new ResizeObserver((entries) => {
        this.props.onResize?.(entries[0].contentRect);
      });

      this.resizeObserver.observe(this.domElementRef.current);
    }
  }

  public override componentWillUnmount() {
    this.resizeObserver?.disconnect();
    this.props.onUnMount?.();
  }

  public override render() {
    return (
      <div className={this.props.className} ref={this.domElementRef}>
        {this.props.children}
      </div>
    );
  }

}

export default ObservableDiv;