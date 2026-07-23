import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { getCategories } from "../services/categoryService";

export default function UploadRecipe() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructions: "",
    cooking_time: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("instructions", formData.instructions);
    data.append("cooking_time", formData.cooking_time);
    data.append("category", formData.category);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      await API.post("recipes/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Recipe uploaded successfully!");

      navigate("/recipes");
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Failed to upload recipe.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,.1)",
      }}
    >
      <h1>Upload Recipe</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Recipe title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
        />

        <br /><br />

        <textarea
          name="instructions"
          placeholder="Cooking Instructions"
          value={formData.instructions}
          onChange={handleChange}
          rows="6"
          required
        />

        <br /><br />

        <input
          type="number"
          name="cooking_time"
          placeholder="Cooking time (minutes)"
          value={formData.cooking_time}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Upload Recipe
        </button>

      </form>
    </div>
  );
}