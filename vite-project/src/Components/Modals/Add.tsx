import  { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../Store/Store";
import { CreateCentr } from "../../Api/Centrs/Centrsapi";

interface AddProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Add = ({ open, setOpen }: AddProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name.trim() || !address.trim()) {
      alert("Введите название и адрес центра");
      return;
    }

    setLoading(true);
    try {
      await dispatch(CreateCentr({ name, address }));
      alert("Центр успешно создан!");
      setOpen(false);
      setName("");
      setAddress("");
    } catch (error) {
      console.error(error);
      alert("Ошибка при создании центра");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Добавить Центр
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Название центра"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Адрес центра"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleCreate}
            disabled={loading}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? "Создание..." : "Создать"}
          </button>
        </div>
      </div>
    </div>
  );
};
