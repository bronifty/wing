import { z } from "zod";

import { createProcedure, createRouter } from "../utils/createRouter.js";
import { DynamodbTableSchema, IDynamodbTableClient, Json } from "../wingsdk.js";

export const createDynamodbTableRouter = () => {
  return createRouter({
    "dynamodb-table.info": createProcedure
      .input(
        z.object({
          resourcePath: z.string(),
        }),
      )
      .query(async ({ input, ctx }) => {
        const simulator = await ctx.simulator();
        const schema = simulator.getResourceConfig(
          input.resourcePath,
        ) as DynamodbTableSchema;
        const client = simulator.getResource(
          input.resourcePath,
        ) as IDynamodbTableClient;
        const rows = await client.scan();
        const attributeDefinitions = schema.props.attributeDefinitions;
        const keySchema = schema.props.keySchema;
        return {
          name: schema.props.name,
          attributeDefinitions,
          keySchema,
          rows,
        };
      }),
    "dynamodb-table.get": createProcedure
      .input(
        z.object({
          resourcePath: z.string(),
          key: z.record(z.any()),
        }),
      )
      .query(async ({ input, ctx }) => {
        const simulator = await ctx.simulator();
        const client = simulator.getResource(
          input.resourcePath,
        ) as IDynamodbTableClient;
        return await client.getItem(input.key as any);
      }),
    "dynamodb-table.insert": createProcedure
      .input(
        z.object({
          resourcePath: z.string(),
          data: z.record(z.any()),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const simulator = await ctx.simulator();
        const client = simulator.getResource(
          input.resourcePath,
        ) as IDynamodbTableClient;

        await client.putItem(input.data as Json);
      }),
    "dynamodb-table.delete": createProcedure
      .input(
        z.object({
          resourcePath: z.string(),
          data: z.record(z.any()),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const simulator = await ctx.simulator();
        const client = simulator.getResource(
          input.resourcePath,
        ) as IDynamodbTableClient;

        const schema = simulator.getResourceConfig(
          input.resourcePath,
        ) as DynamodbTableSchema;
        // keep only key attributes
        const key = Object.keys(input.data)
          .filter(k => (schema.props.keySchema as any)[k])
          .reduce((v: any, k) => { v[k] = input.data[k]; return v; }, {})
        return await client.deleteItem(key as Json);
      }),
  });
};
