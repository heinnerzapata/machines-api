module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      description: String,
      status: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Machine = mongoose.model("machine", schema);
  return Machine;
};
