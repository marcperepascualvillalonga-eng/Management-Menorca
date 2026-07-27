"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { singletonActions, structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Management Menorca",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) =>
      singletonActions(
        prev.map((action) => action.action).filter((action): action is string => Boolean(action)),
        context,
      ).map((actionName) => prev.find((action) => action.action === actionName)!),
  },
});
