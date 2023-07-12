const validation = (activity, errors, setErrors) => {
  // name //
  if (!activity.name) setErrors({ ...errors, name: "Campo incompleto" });
  else if (activity.name.length > 35)
    setErrors({ ...errors, name: "Nombre demasiado largo" });
  else {
    setErrors({ ...errors, name: "" });
  }
  // duration //
  if (!activity.duration)
    setErrors({ ...errors, duration: "Campo incompleto" });
  else {
    setErrors({ ...errors, duration: "" });
  }

  // difficulty //
  if (activity.difficulty === "")
    setErrors({ ...errors, difficulty: "Campo incompleto" });
  else {
    setErrors({ ...errors, difficulty: "" });
  }

  //season //
  if (
    !(
      activity.season === "Spring" ||
      activity.season === "Summer" ||
      activity.season === "Autumn" ||
      activity.season === "Winter"
    )
  )
    setErrors({ ...errors, season: "Campo incompleto" });
  else {
    setErrors({ ...errors, season: "" });
  }
};

export default validation;
