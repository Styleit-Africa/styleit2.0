import '@testing-library/jest-dom/vitest'

class ResizedObserver{
    observe(){}
    unobserve(){}
    disconnect(){}
}

global.ResizeObserver = ResizedObserver