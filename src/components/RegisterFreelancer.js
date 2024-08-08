import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './RegisterFreelancer.css';

const pathServer = "https://tropical-server-9435d6950866.herokuapp.com";
const pathLocal = "http://localhost:5001";

const categories = [
  { name: "Administração", subcategories: ["Atendimento ao Cliente", "Entrada de dados", "Suporte por e-mail", "Gerenciamento de Escritório", "Assistente pessoal", "Apresentações", "Suporte por telefone", "Transcrição", "Assistência virtual", "Processamento de texto", "Outros"] },
  { name: "Suporte de negócios", subcategories: ["Contabilidade", "Escrituração Contábil", "Desenvolvimento de negócios", "Plano de negócios", "Consultoria", "Análise de dados", "Excel", "Suporte de TI", "Legal", "Pesquisa de mercado", "Recrutamento e RH", "Outros"] },
  { name: "Artes criativas", subcategories: ["Design de vestuário e Impressão", "Caricaturas", "Trabalhos manuais", "Belas artes", "Joalheria", "Pintura", "Pôsteres", "Escultura", "Outros"] },
  { name: "Design", subcategories: ["Design 3D", "Animação", "Anúncio em banner", "Livro e Revista", "Brochura, flyer e folheto", "Cartão e Papelaria", "CAD", "Cartoons e Quadrinhos", "Email & Newsletter", "Ilustração e Gráficos", "Design de interiores", "Etiqueta e embalagem", "Logo Design", "Apresentação", "Mídia social", "T-shirt e vestuário", "Webdesign", "Outros"] },
  { name: "Marketing e Relações Públicas", subcategories: ["Publicidade ATL", "Publicidade BTL", "Exibição de publicidade", "Email Marketing", "Comunicações Gerais", "Geração de leads", "Offline Marketing", "Imprensa e Relações com a Mídia", "Comunicados de imprensa", "Telemarketing", "Campanhas virais", "Outros"] },
  { name: "Mobile", subcategories: ["Aplicativo para Android", "Aplicativo para iPhone", "Teste Móvel", "Mobile Website", "Outros"] },
  { name: "Marketing de Pesquisa", subcategories: ["Submissão de Artigo", "Bing / Yahoo PPC", "Google AdWords", "Pesquisa de palavras-chave", "Link Building", "On-site SEO", "Treinamento SEO", "Outros"] },
  { name: "Mídia social", subcategories: ["Blogosfera", "Gestão Comunitária", "Facebook", "Google", "LinkedIn", "Estratégia de mídia social", "Twitter", "Virais", "Youtube", "Outros"] },
  { name: "Desenvolvimento de software", subcategories: [".NET", "Desenvolvimento de aplicações", "Programação C / C ++", "Desenvolvimento de Banco de Dados", "Aplicativo desktop", "ERP / CRM", "Desenvolvimento de giochi", "Programação Geral", "Integração e API", "Programação Java", "Extensão e plug-in", "Script", "Administração de servidores e sistemas", "Teste de software", "Interface de usuário", "Visual básico", "Outros"] },
  { name: "Tradução", subcategories: ["árabe", "bengali", "Mandarim Chinês (simplificado)", "Mandarim Chinês (Tradicional)", "Inglês (Reino Unido)", "Inglês (EUA)", "flamengo", "francês", "alemão", "grego", "italiano", "japonês", "polonês", "Português (Brasil)", "Português (Portugal)", "russo", "Espanhol (latino-americano)", "Espanhol (Espanha)", "sueco", "Outros"] },
  { name: "Vídeo, Foto e Áudio", subcategories: ["Edição de áudio", "Produção musical", "Retoque / Edição de Fotos", "Sessão de fotos", "Apresentação / Atuação", "Vídeos promocionais", "Screencasts", "Edição de vídeo", "Produção de vídeo", "Videografia", "Locução por voz", "Outros"] },
  { name: "Desenvolvimento web", subcategories: ["Blog", "Site personalizado", "Base de dados", "Drupal", "E-commerce", "HTML / CSS", "Integração e Administração", "Javascript / jQuery / Ajax", "Joomla", "Magento", "Opencart", "PHP", "Prestashop", "Mídia social", "Tema / Modelo", "Wordpress", "Outros"] },
  { name: "Escrita", subcategories: ["Blog e redação de artigos", "Perfil da companhia", "Redação", "Escrita creativa", "CV e carta di presentazione", "E-book", "Edição e Revisão", "Noticiário por e-mail", "Escrita Fantasma", "Carta", "Descrição e revisão do produto", "Elaboração de relatórios", "Tela e escrita di script", "Escrita técnica", "Conteúdo para site", "Outros"] }
];

function MultiSelect({ options, selectedOptions, onChange, limit }) {
  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else if (selectedOptions.length < limit) {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select">
      {options.map(option => (
        <label key={option} className="multi-select-option">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleSelect(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

function RegisterFreelancer() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: initialFormData } = location.state || {};

  const [formData, setFormData] = useState({
    ...initialFormData,
    firstName: '',
    lastName: '',
    nif: '',
    profileImage: '',
    profileTitle: '',
    description: '',
    citizenCard: '',
    hourlyRate: '',
    categories: [],
    subcategories: {}
  });

  const [nifValid, setNifValid] = useState(null);

  useEffect(() => {
    if (!initialFormData) {
      navigate('/register');
    }
  }, [initialFormData, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleNifBlur = async () => {
    if (formData.nif) {
      try {
        const response = await fetch(pathServer + `/auth/nif-validate?nif=${formData.nif}`);
        const data = await response.json();
        console.log('NIF validation response:', data);
        if (data.valid) {
          setNifValid(true);
        } else {
          setNifValid(false);
        }
      } catch (error) {
        console.error('Errore durante la verifica del NIF:', error);
        setNifValid(false);
      }
    }
  };

  const handleButtonClick = () => {
    document.getElementById('profileImage').click();
  };

  const handleCategoryChange = (newSelectedCategories) => {
    setFormData(prevFormData => {
      const newSubcategories = { ...prevFormData.subcategories };
      newSelectedCategories.forEach(category => {
        if (!newSubcategories[category]) {
          newSubcategories[category] = [];
        }
      });
      return {
        ...prevFormData,
        categories: newSelectedCategories,
        subcategories: newSubcategories
      };
    });
  };

  const handleSubcategoryChange = (category, newSelectedSubcategories) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      subcategories: {
        ...prevFormData.subcategories,
        [category]: newSelectedSubcategories
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (nifValid === false) {
      alert('NIF non valido.');
      return;
    }
  
    const data = new FormData();
    for (const key in formData) {
      if (key === 'categories') {
        data.append(key, JSON.stringify(formData[key]));
      } else if (key === 'subcategories') {
        // Trasforma l'oggetto in un array di array
        const subcategoriesArray = formData.categories.map(category => formData.subcategories[category] || []);
        data.append(key, JSON.stringify(subcategoriesArray));
      } else {
        data.append(key, formData[key]);
      }
    }
  
    console.log('Data sent to backend:', Object.fromEntries(data.entries()));
  
    try {
      const response = await axios.post(pathServer + '/auth/register/freelancer', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Response from backend:', response.data);
  
      setUserId(response.data.userId); // Assuming the backend returns the user ID
      alert('Freelancer registration successful.');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === 'User already exists') {
        alert('User already exists');
      } else {
        console.error("Error during freelancer registration:", error);
        alert('Error registering freelancer: ' + error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h1>Register Freelancer</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          <input type="text" name="firstName" placeholder="Nome" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="lastName" placeholder="Apelido" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          <input
            type="text"
            name="nif"
            placeholder="NIF"
            value={formData.nif}
            onChange={handleChange}
            onBlur={handleNifBlur}
            required
          />
        </label>
        {nifValid === false && <p style={{ color: 'red' }}>NIF non valido</p>}
        <label>
          <input type="text" name="citizenCard" placeholder="Cartão Cidadão" value={formData.citizenCard} onChange={handleChange} required />
        </label>
        <label>
          <div className="photo-section">
            <div className="photo-icon">
              <img src={"https://s3-alpha-sig.figma.com/img/8514/e653/da09d97df7431de89bd4517a78bad424?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hudzJ1tSUWM70EZjT21Di2QrXz-LN9dEl8ohsu72XYlhU50rtIg8QOS5Ba41In~hj~mE2IMdxeDxiTkX33U0bPTbjfkSNUG9DnigqshqiKbCTJDMxvvxTyDmgYkvoYR-V9yfcm0oVxD0OtkVfQIqq65pkMrxYINES~FXu6zHAy0F1u795~ljL7KiRmLQP~R4FV6bWb5ODI5ZzUq92xE1pNeiX2R7oFMwohzue5vSdH~7jqo6eSPQCjxVDJd7Dx5Q6ml3YKJioa3YxNibC7rzQMS~afg1ufSzLzMfpeNRgVxX~yKSj0V~eq7OUzoxnB8HHlHOO2REvmw34R36zHi97Q__"} alt="Camera Icon" />
            </div>
            <button type="button" onClick={handleButtonClick} className="add-photo-button">
              Adicionar Foto
            </button>
            <input
              type="file"
              name="profileImage"
              id="profileImage"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </div>
        </label>
        <label>
          <input type="text" name="profileTitle" placeholder="Título do Perfil" value={formData.profileTitle} onChange={handleChange} required />
        </label>
        <label>
          <textarea name="description" className='description-freelancer' placeholder="Descrição" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          <input type="number" name="hourlyRate" placeholder="Taxa por Hora" value={formData.hourlyRate} onChange={handleChange} required />
        </label>
        <label>
          <h2>Selecione até 3 categorias</h2>
          <MultiSelect
            options={categories.map(category => category.name)}
            selectedOptions={formData.categories}
            onChange={handleCategoryChange}
            limit={3}
          />
        </label>
        {formData.categories.map(category => (
          <label key={category}>
            <h2>{category} - Selecione até 3 subcategorias</h2>
            <MultiSelect
              options={categories.find(cat => cat.name === category).subcategories}
              selectedOptions={formData.subcategories[category] || []}
              onChange={(newSelectedSubcategories) => handleSubcategoryChange(category, newSelectedSubcategories)}
              limit={3}
            />
          </label>
        ))}
        <button type="submit" className="register-button">Concluir</button>
      </form>
    </div>
  );
}

export default RegisterFreelancer;
