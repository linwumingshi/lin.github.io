# What is Smart-Doc?

![maven](https://img.shields.io/maven-central/v/com.ly.smart-doc/smart-doc)
[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![number of issues closed](https://img.shields.io/github/issues-closed-raw/smart-doc-group/smart-doc)
![closed pull requests](https://img.shields.io/github/issues-pr-closed/smart-doc-group/smart-doc)
![java version](https://img.shields.io/badge/JAVA-1.8+-green.svg)
![git star](https://img.shields.io/github/stars/smart-doc-group/smart-doc.svg)

## Introduce
`smart-doc[smɑːt dɒk]` is a tool that supports both `JAVA REST API`、`JAVA WebSocket` and `Apache Dubbo RPC` interface document generation.
`smart-doc` is based on interface source code analysis to generate interface documents, and zero annotation intrusion.
You only need to write `Javadoc` comments when developing, `smart-doc` can help you generate `Markdown` or `HTML5` document.
smart-doc does not need to inject annotations into the code like Swagger.
<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](getting-started).

</div>

## Features

- Zero annotation, zero learning cost, only need to write standard `JAVA` document comments.
- Automatic derivation based on source code interface definition, powerful return structure derivation support.
- Support `Spring MVC`, `Spring Boot`, `Spring Boot Web Flux` (Not support endpoint), `Feign`,`JAX-RS`.
- Supports the derivation of asynchronous interface returns such as `Callable`, `Future`, `CompletableFuture`.
- Support `JSR-303`parameter verification specification.
- Support for automatic generation of request examples based on request parameters.
- Support for generating `JSON` return value examples.
- Support for loading source code from outside the project to generate field comments (including the sources jar
  package).
- Support for generating multiple formats of documents: `Markdown`,`HTML5`,`Word`,`Asciidoctor`,`Postman Collection 2.0+`,`OpenAPI 3.0`.
- Support the generation of `JMeter` performance testing scripts
- Support for exporting error codes and data dictionary codes to `API` documentation.
- The `debug` html5 page fully supports file upload and download testing.
- Support `Apache Dubbo RPC`.

## Best Practice

`smart-doc` + [Torna](http://torna.cn/) form an industry-leading document generation and management solution, using smart-doc to complete `Java` source code analysis and extract annotations to generate API documents without intrusion, and automatically push the documents to the `Torna` enterprise-level interface document management platform.
![smart-doc + Torna](/assets/smart-doc-en.png)

> Torna is an open source API document management system, developed by the `smart-doc` official team. Torna provides convenience for enterprise API document management.

## TODO

- `GRPC`

## License

`smart-doc` is under the Apache 2.0 license. See the [LICENSE](https://github.com/smart-doc-group/smart-doc/blob/master/LICENSE) file for details.

**PS:** Smart-doc source code files are all with copyright notes. Please keep the original copyright when using the key code for the second open source, otherwise you will be responsible for the consequences!

## Who is using

> These are only part of the companies using `smart-doc`, for reference only. If you are using `smart-doc`, please [add your company here](https://github.com/smart-doc-group/smart-doc/issues/12) to tell us your scenario to make smart-doc better.

![iflytek](/assets/known-users/iflytek.png)
![oneplus](/assets/known-users/oneplus.png)
![xiaomi](/assets/known-users/xiaomi.png)
![shunfeng](/assets/known-users/shunfeng.png)
![ly](/assets/known-users/ly.jpeg)
![kuishou](/assets/known-users/kuishou.png)
![mafengwo](/assets/known-users/mafengwo.png)
![yunda](/assets/known-users/yunda.png)
![zhongtongzhiyun](/assets/known-users/zhongtongzhiyun.png)
![tcsklogo](/assets/known-users/tcsklogo.jpeg)
![flipboard](/assets/known-users/flipboard.png)
![dianxin](/assets/known-users/dianxin.png)
![yidong](/assets/known-users/yidong.png)
![neusoft](/assets/known-users/neusoft.png)
![zhongkezhilian](/assets/known-users/zhongkezhilian.png)
![hand-logo](/assets/known-users/hand-logo.svg)
![yuanmengjiankang](/assets/known-users/yuanmengjiankang.png)



## Acknowledgements
Thanks to [JetBrains SoftWare](https://www.jetbrains.com) for providing free Open Source license for this open source project.
<img src="/assets/jetbrains-variant-3.png" alt="jetbrains" width="200">


## Contact

Email： opensource@ly.com
