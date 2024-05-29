"use client";
import { CanvasGrid, SpreadsheetProvider } from "@rowsncolumns/spreadsheet";
import React from "react";

export const Spreadsheet = () => (
  <SpreadsheetProvider>
    <CanvasGrid sheetId={1} />
  </SpreadsheetProvider>
);
