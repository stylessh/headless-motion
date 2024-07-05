# headless-motion

Put motion on your website within minutes.

## Installation

```bash
npm install headless-motion

# or

yarn add headless-motion

# or

pnpm add headless-motion
```

## Usage

On your root layout, wrap your app with the `MotionWrapper` component.
This will provide the necessary context for the headless motion to work, also
it will load `framer-motion` asynchronously.

```tsx
import { MotionWrapper } from "headless-motion";

function RootLayout() {
  return (
    <MotionWrapper>
        {...}
    </MotionWrapper>
  );
}
```

After that, you can use all the components we provide.

## License

MIT
