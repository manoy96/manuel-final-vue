export const aboutMixin = {
  data() {
    return {
      allFilms: films,
      starships
    };
  },
  filters: {
    allCaps(value) {
      return value.toUpperCase();
    }
  }
};
