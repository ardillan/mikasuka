export const formatDate = (
  postDate: Date,
  type: "readable" | "numeric",
): string => {
  switch (type) {
    case "readable":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "numeric":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    default:
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
};
