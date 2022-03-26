export const toHtmlFormData = (formData0: { [key: string]: string }) => {
  return Object.entries(formData0)
    .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
    .join("&");
};

export const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');