import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },

    discountPercentage: {
      type: Number,
      required: [true, "Discount is required"],
      min: [0, "Cannot be less than 0"],
      max: [100, "Cannot be more than 100"]
    }
    
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);