import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {

  render() {
    return (
      <Host>
        <slot></slot>
        <h3>Test komponenta</h3>
      </Host>
    );
  }

}
