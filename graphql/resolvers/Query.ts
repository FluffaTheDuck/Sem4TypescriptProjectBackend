import DungeonModel from "../../models/DungeonModel";
import ItemModel from "../../models/ItemModel";
import ClassModel from "../../models/ClassModel";

export default {
  dungeons: async (_parent: never, _args: never) => DungeonModel.find(),
  items: async (_parent: never, _args: never) => ItemModel.find(),
  classes: async (_parent: never, _args: never) => ClassModel.find(),
};
