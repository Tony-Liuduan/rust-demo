# Rust-demo

## reference

* <https://mp.weixin.qq.com/s/dknF5W-Quh_o4fqTlptCCA>


执行完成后，编译好的 JavaScript 包和优化好的 Wasm 代码会保存到我们的 build 目录中，以供 React 程序使用
`wasm-bindgen target/wasm32-unknown-unknown/debug/rust_demo.wasm --out-dir build`