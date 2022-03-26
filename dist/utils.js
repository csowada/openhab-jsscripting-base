"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroPad = exports.toHtmlFormData = void 0;
const toHtmlFormData = (formData0) => {
    return Object.entries(formData0)
        .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
        .join("&");
};
exports.toHtmlFormData = toHtmlFormData;
const zeroPad = (num, places) => String(num).padStart(places, '0');
exports.zeroPad = zeroPad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxjQUFjLEdBQUcsQ0FBQyxTQUFvQyxFQUFFLEVBQUU7SUFDckUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUpXLFFBQUEsY0FBYyxrQkFJekI7QUFFSyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQVcsRUFBRSxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQTdFLFFBQUEsT0FBTyxXQUFzRSJ9