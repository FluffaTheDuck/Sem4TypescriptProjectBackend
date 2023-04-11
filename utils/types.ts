import mongoose from "mongoose";

export type TClass = {
  id?: mongoose.Schema.Types.ObjectId;
  name: string;
  specs: TSpec[];
  armortype: string;
};

export type TSpec = {
  name: string;
  mainstat: string;
};

export type TPreviewItem = {
  invetory_type: TInventoryType;
  item_subclass: TItemSubclass;
  stats: TStat[];
  item_level: TItemLevel;
};

export type TItemLevel = {
  value: number;
  display_string: string;
};

export type TStat = {
  type: TStatType;
  value: number;
  display: TStatDisplay;
};

export type TStatType = {
  type: string;
  name: string;
};

export type TStatDisplay = {
  display_string: string;
  color: { r: number; g: number; b: number; a: number };
};

export type TItem = {
  id?: mongoose.Schema.Types.ObjectId;
  name: string;
  preview_item: TPreviewItem;
};

export type TDungeon = {};

export type TInventoryType = {
  type: string;
  name: string;
};

export type TItemSubclass = {
  key: { href: string };
  name: string;
  id: number;
};