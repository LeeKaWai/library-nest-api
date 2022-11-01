<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 关于项目设置
```bash
  数据库采用MongoDB, 可通过 configs/env 文件中 进行配置数据库连接信息
```

## 安装依赖

```bash
$ yarn install
```

## 如何启动

```bash

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```


## 如何使用


|请求方法 |地址  |参数|备注  
| --- | --- | --- | ---
| GET |http://lcoalhost:8888/books |1. name  非必须  书本名 支持模糊查询 <br/> 2. author 非必须 作者名 支持模糊查询 <br/> 3. categories[] 非必须 分类 支持数组 <br/> 4. sort 非必须 排序字段 默认是创建时间   createdAt <br/> 5. sortBy 非必须 排序方式 默认是 -1 倒序  | 获取所有书本
| POST |http://localhost:8888/books| 1.name  必须 书本名 不支持重复书本名 <br/>2. author 必须 作者名 <br/> 3. categories[] 必须 分类 数组<br/> 4. score 必须 评分 数字| 新增书本
| PUT |http://localhost:8888/books/:id| 需要更新的字段| 更新书本信息
| GET |http://localhost:8888/books/:id| id 书本id| 根据 id 获取书本信息
| DELETE |http://localhost:8888/books/:id| id 书本id| 根据 id 删除指定书本

