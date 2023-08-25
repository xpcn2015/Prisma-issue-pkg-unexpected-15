# Reproduction for 
Reproduction repository for

### Environment 
- OS: windows 10
- Node.js: 18.16

### Testing
1. install dependencies
```
yarn install
```
2. generate Prisma client
```
yarn prisma generate
```
3. create .exe file
```
yarn pkg .
```
4. in Powershell, setting the `DEBUG="*"` environment variable and enabling additional logging output in Prisma Client
```
$env:DEBUG="*"
```
5. run .exe file

### Error output
```
  prisma:tryLoadEnv  Environment variables not found at C:\snapshot\tr\.env +0ms
  prisma:tryLoadEnv  Environment variables not found at C:\snapshot\tr\.env +1ms
  prisma:tryLoadEnv  No Environment variables loaded +1ms
  prisma:client  checkPlatformCaching:postinstall false +0ms
  prisma:client  checkPlatformCaching:ciName undefined +1ms
  prisma:tryLoadEnv  Environment variables not found at C:\snapshot\tr\.env +1ms
  prisma:tryLoadEnv  Environment variables not found at C:\snapshot\tr\.env +0ms
  prisma:tryLoadEnv  No Environment variables loaded +1ms
  prisma:client  dirname C:\snapshot\tr\node_modules\.prisma\client +0ms
  prisma:client  relativePath ../../../prisma +0ms
  prisma:client  cwd C:\snapshot\tr\node_modules\.prisma\client +0ms
  prisma:client  clientVersion 5.2.0 +1ms
  prisma:client:libraryEngine  internalSetup +0ms
Begin
  prisma:client  Prisma Client call: +1ms
  prisma:client  prisma.user.findFirst({}) +1ms
  prisma:client  Generated request: +0ms
  prisma:client  {
  "modelName": "User",
  "action": "findFirst",
  "query": {
    "arguments": {},
    "selection": {
      "$composites": true,
      "$scalars": true
    }
  }
}
 +0ms
  prisma:client:libraryEngine  sending request, this.libraryStarted: false +4ms
  prisma:client:engines:resolveEnginePath  enginePath C:\snapshot\tr\node_modules\.prisma\client\query_engine-windows.dll.node +0ms
  prisma:client:request_handler  PrismaClientInitializationError: Unable to require(`C:\snapshot\tr\node_modules\.prisma\client\query_engine-windows.dll.node`).
The Prisma engines do not seem to be compatible with your system. Please refer to the documentation about Prisma's system requirements: https://pris.ly/d/system-requirements

Details: UNEXPECTED-15
    at dn.loadLibrary (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:112:9956)    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.runNextTicks [as _tickCallback] (node:internal/process/task_queues:64:3)       
    at Function.runMain (pkg/prelude/bootstrap.js:1980:13)
    at node:internal/main/run_main_module:17:47
    at async pr.loadEngine (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:114:447)
    at async pr.instantiateLibrary (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:113:1762)
    at async pr.start (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:114:2166)    at async pr.request (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:114:3828)
    at async Object.singleLoader (C:\snapshot\tr\node_modules\@prisma\client\runtime\library.js:123:5246) {
  clientVersion: '5.2.0',
  errorCode: undefined
} +0ms
}
```
