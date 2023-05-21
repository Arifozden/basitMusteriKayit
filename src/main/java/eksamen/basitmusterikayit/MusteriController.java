package eksamen.basitmusterikayit;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusteriController {
    @PostMapping("/")
    public Musteri musteri(Musteri girMusteri){
        return girMusteri;
    }
}
