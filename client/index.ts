import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "wrapper/hello_grpc_pb";

new GreeterClient("abc", grpc.credentials.createInsecure());
