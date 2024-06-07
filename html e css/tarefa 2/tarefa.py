def coeficienteAngular(x1,y1,x2,y2):
    delta_x=x2-x1
    delta_y=y2-y1
    coef_angular=delta_y/delta_x
    return coef_angular


teste=coeficienteAngular(1,2,3,4)
print(teste)
