package com.notastrinitario.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;

@SuppressWarnings("unused")
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Solo redirige la ruta raíz a index.html
        registry.addViewController("/").setViewName("forward:/index.html");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Configuración para archivos estáticos
        registry.addResourceHandler(
                "/**",
                "/webjars/**",
                "/img/**",
                "/css/**",
                "/js/**")
                .addResourceLocations(
                        "classpath:/static/",
                        "classpath:/META-INF/resources/static/",
                        "classpath:/META-INF/resources/")
                .setCacheControl(CacheControl.noCache().cachePrivate());

        // Swagger UI
        registry.addResourceHandler("/swagger-ui/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/");

        // Profile pictures
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/")
                .setCacheControl(CacheControl.noCache().cachePrivate());

        // Firmas director
        registry.addResourceHandler("/Firmas/**")
                .addResourceLocations("file:./Frontend/Firmas/")
                .setCacheControl(CacheControl.noCache().cachePrivate());
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        // Configuración de coincidencia de rutas
    }
}