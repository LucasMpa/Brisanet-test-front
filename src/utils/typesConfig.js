export function getBackgroundType(type) {
  const types = {
    normal: {
      bg: "#a4acaf",
      fc: "#F5F7FA",
    },
    electric: {
      bg: "#FFCB05",
      fc: "#1E1E1F",
    },
    poison: {
      bg: "#b97fc9",
      fc: "#F5F7FA",
    },
    ground: {
      bg: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
      fc: "#F5F7FA",
    },
    fairy: {
      bg: "#fdb9e9",
      fc: "#F5F7FA",
    },
    fire: {
      bg: "#A2230A",
      fc: "#F5F7FA",
    },
    flying: {
      bg: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
      fc: "#F5F7FA",
    },
  };
  return types[type];
}
