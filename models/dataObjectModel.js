const mongoose = require("mongoose");

const dataObjectSchema = new mongoose.Schema(
  {
    datasetType: String,
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dataset: { type: mongoose.Schema.Types.ObjectId, ref: "Dataset" },
    info: {
      status: { type: String, required: true },
      private: Boolean,
      canonical: Boolean,
      numDownload: Number,
      createdBy: String,
      email: String,
      shareToken: String,
      filteredSensitivity: Boolean,
      commitID: String,
      date: {
        submitted: Date,
        processed: Date,
        created: Date,
      },
      other: Object,
    },

    repositories: [
      {
        version: String,
        doi: String,
        downloadLink: mongoose.Schema.Types.Mixed,
        bioComputeObject: {
          doi: String,
          downloadLink: String,
        },
      },
    ],
    availableDatatypes: [
      {
        name: String,
        genomeType: String,
        details: Object,
      },
    ],
  },
  {
    useFindAndModify: false,
  }
);

module.exports = mongoose.model("DataObject", dataObjectSchema);
