import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--calendarAddLarge"><path d="M10.327 12.474h11.46l.873-1.746H9.454l.873 1.746Z"></path><path d="M22.075 6.364V4.618h-1.746v1.746h-8.728V4.618H9.855v1.746H4.618v20.948h18.33a4.364 4.364 0 0 0 4.364-4.364V6.364h-5.237Zm3.491 16.584a2.618 2.618 0 0 1-2.618 2.618H6.364V8.11h3.491v.873h1.746V8.11h8.728v.873h1.746V8.11h3.491v14.838Z"></path><path d="M19.928 18.147h-3.055v-3.055h-1.746v3.055h-3.055v1.746h3.055v3.055h1.746v-3.055h3.055v-1.746Z"></path></svg>';

export class IconCalendarAddLarge extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAddLarge', '', null, 'IconCalendarAddLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--calendarAddLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAddLarge', '', newVal, 'IconCalendarAddLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-calendar-add-large', IconCalendarAddLarge);